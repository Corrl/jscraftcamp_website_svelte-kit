<script>
    export let tags
</script>

<ul>
    {#each tags as tag}
        <li>
            <span>#{tag}</span>
        </li>
    {/each}
</ul>

<style>
    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;
        margin: 0;
    }

    li {
        background-color: var(--primary-color);
        border-radius: var(--border-radius);
        color: #fff;
        padding: 1px 4px;
    }

</style>