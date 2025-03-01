/**
 * Copyright (c) Syed Umar Anis
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {EditorThemeClasses} from 'lexical';

import './DefaultEditorTheme.css';
import './shell/DefaultShellTheme.js';

export const theme: EditorThemeClasses = {
  autocomplete: 'SL_Theme__autocomplete',
  blockCursor: 'SL_Theme__blockCursor',
  characterLimit: 'SL_Theme__characterLimit',
  code: 'SL_Theme__code',
  codeHighlight: {
    atrule: 'SL_Theme__tokenAttr',
    attr: 'SL_Theme__tokenAttr',
    boolean: 'SL_Theme__tokenProperty',
    builtin: 'SL_Theme__tokenSelector',
    cdata: 'SL_Theme__tokenComment',
    char: 'SL_Theme__tokenSelector',
    class: 'SL_Theme__tokenFunction',
    'class-name': 'SL_Theme__tokenFunction',
    comment: 'SL_Theme__tokenComment',
    constant: 'SL_Theme__tokenProperty',
    deleted: 'SL_Theme__tokenProperty',
    doctype: 'SL_Theme__tokenComment',
    entity: 'SL_Theme__tokenOperator',
    function: 'SL_Theme__tokenFunction',
    important: 'SL_Theme__tokenVariable',
    inserted: 'SL_Theme__tokenSelector',
    keyword: 'SL_Theme__tokenAttr',
    namespace: 'SL_Theme__tokenVariable',
    number: 'SL_Theme__tokenProperty',
    operator: 'SL_Theme__tokenOperator',
    prolog: 'SL_Theme__tokenComment',
    property: 'SL_Theme__tokenProperty',
    punctuation: 'SL_Theme__tokenPunctuation',
    regex: 'SL_Theme__tokenVariable',
    selector: 'SL_Theme__tokenSelector',
    string: 'SL_Theme__tokenSelector',
    symbol: 'SL_Theme__tokenProperty',
    tag: 'SL_Theme__tokenProperty',
    url: 'SL_Theme__tokenOperator',
    variable: 'SL_Theme__tokenVariable',
  },
  embedBlock: {
    base: 'SL_Theme__embedBlock',
    focus: 'SL_Theme__embedBlockFocus',
  },
  hashtag: 'SL_Theme__hashtag',
  heading: {
    h1: 'SL_Theme__h1',
    h2: 'SL_Theme__h2',
    h3: 'SL_Theme__h3',
    h4: 'SL_Theme__h4',
    h5: 'SL_Theme__h5',
    h6: 'SL_Theme__h6',
  },
  hr: 'SL_Theme__hr',
  image: 'editor-image',
  indent: 'SL_Theme__indent',
  inlineImage: 'inline-editor-image',
  layoutContainer: 'SL_Theme__layoutContainer',
  layoutItem: 'SL_Theme__layoutItem',
  link: 'SL_Theme__link',
  list: {
    checklist: 'SL_Theme__checklist',
    listitem: 'SL_Theme__listItem',
    listitemChecked: 'SL_Theme__listItemChecked',
    listitemUnchecked: 'SL_Theme__listItemUnchecked',
    nested: {
      listitem: 'SL_Theme__nestedListItem',
    },
    olDepth: [
      'SL_Theme__ol1',
      'SL_Theme__ol2',
      'SL_Theme__ol3',
      'SL_Theme__ol4',
      'SL_Theme__ol5',
    ],
    ul: 'SL_Theme__ul',
  },
  ltr: 'SL_Theme__ltr',
  mark: 'SL_Theme__mark',
  markOverlap: 'SL_Theme__markOverlap',
  paragraph: 'SL_Theme__paragraph',
  quote: 'SL_Theme__quote',
  rtl: 'SL_Theme__rtl',
  table: 'SL_Theme__table',
  tableCell: 'SL_Theme__tableCell',
  tableCellActionButton: 'SL_Theme__tableCellActionButton',
  tableCellActionButtonContainer: 'SL_Theme__tableCellActionButtonContainer',
  tableCellEditing: 'SL_Theme__tableCellEditing',
  tableCellHeader: 'SL_Theme__tableCellHeader',
  tableCellPrimarySelected: 'SL_Theme__tableCellPrimarySelected',
  tableCellResizer: 'SL_Theme__tableCellResizer',
  tableCellSelected: 'SL_Theme__tableCellSelected',
  tableCellSortedIndicator: 'SL_Theme__tableCellSortedIndicator',
  tableResizeRuler: 'SL_Theme__tableCellResizeRuler',
  tableRowStriping: 'SL_Theme__tableRowStriping',
  tableScrollableWrapper: 'SL_Theme__tableScrollableWrapper',
  tableSelected: 'SL_Theme__tableSelected',
  tableSelection: 'SL_Theme__tableSelection',
  tableAddRows: 'SL_Theme__tableAddRows',
  tableAddColumns: 'SL_Theme__tableAddColumns',
  text: {
    bold: 'SL_Theme__textBold',
    code: 'SL_Theme__textCode',
    italic: 'SL_Theme__textItalic',
    strikethrough: 'SL_Theme__textStrikethrough',
    subscript: 'SL_Theme__textSubscript',
    superscript: 'SL_Theme__textSuperscript',
    underline: 'SL_Theme__textUnderline',
    underlineStrikethrough: 'SL_Theme__textUnderlineStrikethrough',
  },
};
