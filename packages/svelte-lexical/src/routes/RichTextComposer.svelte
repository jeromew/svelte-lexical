<script lang="ts">
  import {
    Composer,
    ContentEditable,
    ActionBar,
    RichTextPlugin,
    HistoryPlugin,
    ListPlugin,
    CheckListPlugin,
    HorizontalRulePlugin,
    ImagePlugin,
    MarkdownShortcutPlugin,
    TEXT_FORMAT_TRANSFORMERS,
    ELEMENT_TRANSFORMERS,
    HR,
    IMAGE,
    CHECK_LIST,
    LinkNode,
    LinkPlugin,
    validateUrl,
    CAN_USE_DOM,
    FloatingLinkEditorPlugin,
    LINK,
    AutoLinkNode,
    AutoLinkPlugin,
    CodeNode,
    CodeHighlightNode,
    CodeHighlightPlugin,
    CodeActionMenuPlugin,
    ColumnLayoutPlugin,
    TreeViewPlugin,
    YouTubeNode,
    TweetNode,
  } from '$lib/index.js';
  import {
    HeadingNode,
    QuoteNode,
    ListNode,
    ListItemNode,
    HorizontalRuleNode,
    ImageNode,
    LayoutContainerNode,
    LayoutItemNode,
  } from '$lib/index.js';
  import {theme} from '$lib/themes/system-light-dark/index.js';
  import {
    $getRoot as getRoot,
    $createTextNode as createTextNode,
    $createParagraphNode as createParagraphNode,
  } from '$lib/index.js';
  import RichTextToolbar from './RichTextToolbar.svelte';
  import {onMount} from 'svelte';
  import TablePlugin from '$lib/core/plugins/Table/TablePlugin.svelte';
  import {TableCellNode, TableNode, TableRowNode} from '@lexical/table';
  import TableHoverActionPlugin from '$lib/core/plugins/Table/TableHoverActionPlugin.svelte';
  import TableActionMenuPlugin from '$lib/core/plugins/Table/TableActionMenuPlugin.svelte';
  import TableCellResizerPlugin from '$lib/core/plugins/Table/TableCellResizerPlugin.svelte';
  import YoutubePlugin from '$lib/core/plugins/youtube/YoutubePlugin.svelte';
  import TwitterPlugin from '$lib/core/plugins/twitter/TwitterPlugin.svelte';
  import BlueskyPlugin from '$lib/core/plugins/bluesky/BlueskyPlugin.svelte';
  import {BlueskyNode} from '$lib/core/plugins/bluesky/BlueskyNode.js';
  import TabIndentationPlugin from '$lib/core/plugins/TabIndentationPlugin.svelte';

  let isSmallWidthViewport = $state(true);
  let editorDiv: HTMLDivElement | undefined = $state();

  const initialConfig = {
    theme: theme,
    namespace: 'pg_sveltekit',
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      HorizontalRuleNode,
      ImageNode,
      LinkNode,
      AutoLinkNode,
      CodeNode,
      CodeHighlightNode,
      LayoutContainerNode,
      LayoutItemNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      YouTubeNode,
      TweetNode,
      BlueskyNode,
    ],
    onError: (error: Error) => {
      throw error;
    },
    editorState: () => {
      const root = getRoot();
      if (root.getFirstChild() === null) {
        const paragraph = createParagraphNode();
        paragraph.append(
          createTextNode('This demo environment is built with '),
          createTextNode('svelte-lexical').toggleFormat('code'),
          createTextNode('.'),
          createTextNode(' Try typing in '),
          createTextNode('some text').toggleFormat('bold'),
          createTextNode(' with '),
          createTextNode('different').toggleFormat('italic'),
          createTextNode(' formats.'),
        );
        root.append(paragraph);
      }
    },
  };

  onMount(() => {
    function updateViewPortWidth() {
      const isNextSmallWidthViewport =
        CAN_USE_DOM && window.matchMedia('(max-width: 1025px)').matches;

      if (isNextSmallWidthViewport !== isSmallWidthViewport) {
        isSmallWidthViewport = isNextSmallWidthViewport;
      }
    }
    updateViewPortWidth();
    window.addEventListener('resize', updateViewPortWidth);

    return () => {
      window.removeEventListener('resize', updateViewPortWidth);
    };
  });
</script>

<Composer {initialConfig}>
  <div class="editor-shell svelte-lexical">
    <RichTextToolbar />
    <div class="editor-container tree-view">
      <div class="editor-scroller">
        <div class="editor" bind:this={editorDiv}>
          <ContentEditable />
        </div>
      </div>
      <RichTextPlugin />
      <HistoryPlugin />
      <ListPlugin />
      <CheckListPlugin />
      <HorizontalRulePlugin />
      <ImagePlugin captionsEnabled={false} />
      <AutoLinkPlugin />
      <LinkPlugin {validateUrl} />
      <CodeHighlightPlugin />
      {#if !isSmallWidthViewport}
        <FloatingLinkEditorPlugin anchorElem={editorDiv} />
        <CodeActionMenuPlugin anchorElem={editorDiv} />
      {/if}
      <MarkdownShortcutPlugin
        transformers={[
          ...TEXT_FORMAT_TRANSFORMERS,
          ...ELEMENT_TRANSFORMERS,
          HR,
          IMAGE,
          CHECK_LIST,
          LINK,
        ]} />
      <ColumnLayoutPlugin />
      <TablePlugin hasHorizontalScroll={true} />
      <TableHoverActionPlugin anchorElem={editorDiv} />
      <TableCellResizerPlugin />
      <TableActionMenuPlugin anchorElem={editorDiv} cellMerge={true} />
      <YoutubePlugin />
      <TwitterPlugin />
      <BlueskyPlugin />
      <TabIndentationPlugin />

      <ActionBar />
    </div>
    <TreeViewPlugin />
  </div>
</Composer>
