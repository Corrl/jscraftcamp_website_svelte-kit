<script>
    import Explanation from "./Explanation.svelte";
    import code from '../../../../assets/images/code_edit.svg'
    import rocket from '../../../../assets/images/rocket.svg'
    import camp from '../../../../assets/images/camp.svg'
</script>

<div>

    <Explanation headline="Javascript" icon={code}>
        The focus of this BarCamp are JavaScript and related technologies.
        Possible topics are: Popular frameworks like Angular and React, the
        latest ECMAScript standard, languages like Elm or TypeScript which
        transpile to JavaScript, server-side programming with node.js, paradigms
        like event driven programming or future technologies like WebAssembly.
    </Explanation>

    <Explanation headline="Crafting Software" icon={rocket}>
        Have you ever struggled with an huge old JavaScript codebase? Or rolled
        your eyes about an 'undefined' is not a function error? We will discuss
        which tools, practices and architecture patterns – from continuous
        integration to modular components – can help to create and maintain
        long-living, evolvable JavaScript applications.
    </Explanation>

    <Explanation headline="Barcamp" icon={camp}>
        A barcamp – also called an unconference – is an event without any
        previously fixed agenda. All the participants meet in the morning and
        decide about the schedule for the day. Everyone can offer a session -
        from a short hands-on workshop to moderating a discussion. The goal is
        to make everything as participative as possible. Read more about BarCamp
        on Wikipedia.
    </Explanation>

</div>

<style>

    div {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: 4rem;
        padding: 0 2rem;
    }

    div :global(>div) {
        flex-basis: 36ch;
        max-width: 60ch;
        flex-grow: 1;
    }

</style>