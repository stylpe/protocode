import type * as U from 'unist';
import { unified } from 'unified';
import { inspect } from 'unist-util-inspect';

import type { VFile } from 'vfile';
import { read } from 'to-vfile';
import { reporter } from 'vfile-reporter';

import type * as MD from 'mdast';
import { toString } from 'mdast-util-to-string';
import remarkParse from 'remark-parse';

function show(tree: U.Node) {
  console.log(inspect(tree));
}

const file: VFile = await read({ path: 'test/Syntax samples.md' });

const processor = unified().use(remarkParse);

const mdast = processor.parse(file);
show(mdast);
console.dir(reporter(file));

type Commentary = Exclude<MD.RootContent, MD.Heading | MD.List>;

type Content = SubSection | Commentary;

interface TextFrom<T extends MD.RootContent> extends U.Literal {
  //src: T;
}

interface RootSection extends U.Parent {
  type: 'root';
  level: 0;
  children: Content[];
}
interface SubSection extends U.Parent {
  type: 'section';
  name: Name;
  level: MD.Heading['depth'];
  children: Content[];
}
type Section = RootSection | SubSection;
interface Name extends TextFrom<MD.Heading> {
  type: 'name';
}

function toName(heading: MD.Heading): Name {
  return {
    type: 'name',
    //src: heading,
    value: toString(heading),
    position: heading.position,
  };
}

function scan(mdroot: MD.Root) {
  const root: RootSection = { type: 'root', level: 0, children: [], position: mdroot.position };
  let current: Section = root;
  const lineage: SubSection[] = [];
  function push(ss:SubSection) {
    current.children.push(ss);
    current = ss;
    lineage.push(ss);
  }
  function popLevel(level: MD.Heading['depth']) {
    while (current.level >= level) {
      current = lineage.pop() || root;
    }
  }
  for (const it of mdroot.children) {
    if (it.type === 'heading') {
      popLevel(it.depth);
      const subsection: SubSection = {
        type: 'section',
        name: toName(it),
        level: it.depth,
        children: [],
      };
      push(subsection);
    } else if (it.type === 'list') {
      current.children.push(...it.children);
    } else {
      if (it.type === 'thematicBreak') popLevel(3);
      current.children.push(it);
    }
  }
  return root;
}

const scanned = scan(mdast);
show(scanned);
