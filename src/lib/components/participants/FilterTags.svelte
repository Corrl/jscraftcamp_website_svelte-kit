<!--suppress JSUnusedAssignment -->
<script>
    export let participants
    export let filterFor

    const tags = participants.flatMap(p => p.tags.map(tag => tag))
    const tagsGroupedByTag = tags.reduce((map, tag) => {
        const key = tag.toLowerCase()
        const hasEntry = map[key]
        if (hasEntry) map[key].push(tag)
        else map[key] = [tag]
        return map
    }, {})

    const filterTags = Object.values(tagsGroupedByTag)
        // .filter(tags => tags.length > 1)
        .flatMap(tags => tags[0])
        .sort((a, b) => a.localeCompare(b))

</script>

<div id="filter-tags">
    <div class="" style="display: flex; justify-content: center; align-items: center">
        <h3>Filter</h3>
    </div>
    <div class="filter-tag">
        <input type="radio"
               id="filter-tag"
               value={''}
               bind:group={filterFor}
        >
        <label for="filter-tag"
               class="show-all"
               class:active-filter={filterFor === ''}
        >
            all tags
        </label>
    </div>
    {#each filterTags as tag, index}
        {@const count = tagsGroupedByTag[tag.toLowerCase()].length}
        {@const activeFilter = filterFor === tag.toLowerCase()}
        <div class="filter-tag">
            <input type="radio"
                   id="filter-tag-{index}"
                   value={tag.toLowerCase()}
                   bind:group={filterFor}
            >
            <!--suppress HtmlUnknownAttribute -->
            <label for="filter-tag-{index}"
                   style:font-size="{count * 1.5 + 14}px"
                   style:opacity={activeFilter ? 1 : Math.min(count * .15 + .6, 1)}
                   class:active-filter={activeFilter}
                   class:just-one={count === 1}
            >
                #{tag}
            </label>
        </div>
    {/each}
</div>

<style>

    #filter-tags {
        display: flex;
        flex-wrap: wrap;
        gap: .6rem .8rem;
        justify-content: center;
        align-items: center;
    }

    .filter-tag {
        position: relative;
        display: flex;
    }


    label {
        width: 100%;
        height: 100%;
        padding: 4px 6px;
        font-size: .95rem;
        /*background: #e3e3e3;*/
        border-radius: var(--border-radius);
        user-select: none;
        line-height: 1.2;
    }

    label:hover {
        background: var(--primary-color);
        color: white;
        opacity: 1 !important;
    }

    .show-all {
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-h3);
        background: var(--text-color);
        color: white;
        padding-left: .8em;
        padding-right: .8em;
    }

    input {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -3;
        visibility: hidden;
    }

    .active-filter {
        background: var(--primary-color);
        color: white;
    }

</style>