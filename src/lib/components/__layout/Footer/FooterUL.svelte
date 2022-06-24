<script>
    export let title
    export let links
    export let base
</script>


<ul data-title={title}>
    {#each links as [text, url, imgUrl]}
        <li>
            {#if imgUrl}<img src="{base}/logos{imgUrl}" width="22" height="22" alt={text}>{/if}
            <a href={url.startsWith('/') ? base : ''}{url}>{text}</a>
        </li>
    {/each}
</ul>


<style>

    ul::before {
        content: attr(data-title);
        font-size: var(--font-size-h4);
        font-weight: var(--font-weight-semibold);
    }

    ul {
        flex-direction: column;
        /*justify-content: center;*/
        gap: 1.4rem;
        /*min-width: 10ch;*/
    }

    li {
        display: flex;
        align-items: center;
        line-height: 1;
        white-space: nowrap;
    }

    a {
        color: inherit;
        font-size: var(--font-size-small);
    }

    img {
        display: block;
        margin-right: .3rem;
    }

</style>