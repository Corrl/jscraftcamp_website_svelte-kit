<script>
    export let template

    const explanations = [
        ['name *', 'first name and last name or a nick name'],
        ['company', 'A company'],
        ['when.friday *', 'If you are attending on Friday (Boolean value)'],
        ['when.saturday *', 'If you are attending on Saturday (Boolean value)'],
        ['tags *', 'Share what you think is important, use at least one tag. (Array of strings)'],
        ['vegan *', 'Just for planning: Let us know if you are a vegan** (Boolean value)'],
        ['vegetarian *', 'Just for planning: Let us know if you are a vegetarian** (Boolean value)'],
        ['allergies', 'Tell us if you have any special dietary requirements**'],
        ['what_is_my_connection_to_javascript *', '2-5 sentences about your experience with JavaScript or related technologies.'],
        ['what_can_i_contribute', '1-3 sentences about what you would like to contribute to the BarCamp.'],
        ['tshirt **', 'We will have a limited number of t-shirts with the event and sponsor logos. If you want one: fit (W=women, M=Man) and size (S,M,L,XL,XXL), e.g. W-S or M-XL. If your registration is shortly before the event there might be no time to have a t-shirt produced for you, please be aware.'],
        ['twitter', 'Your Twitter handle <em>without</em> the leading <code>@</code>.'],
    ]
</script>

<h3>
    The JSON Format
</h3>

<div>
    <pre><code>{template}</code></pre>
</div>

<div id="table-wrapper">

    <table>
        <tbody>

        {#each explanations as [key, info]}
            <tr>
                <td class:strong={key.endsWith(' *')}>
                    <code>{key}</code>
                </td>
                <td>{@html info}</td>
            </tr>
        {/each}

        </tbody>
    </table>

    <p>
        <strong>*: mandatory field</strong>
    </p>

    <p>
        **: This is a free and completely sponsored event. Even though we want
        to try, we can not guarantee to be able to respect every dietary
        requirement
    </p>
</div>


<style>

    h3 {
        text-align: center;
    }

    pre {
        padding: 16px;
        background: white;
        margin: revert;
        font-size: 1rem;
    }

    #table-wrapper {
        padding: 1rem;
        background: white;
    }

    table {
        font-size: 1rem;
        border-collapse: collapse;
    }

    tr {
        border-bottom: 1px solid #e6e6e6;
    }

    td {
        padding: 15px 5px;
    }

    td:first-child {
        white-space: nowrap;
    }

    p {
        margin: 1rem;
    }

    .strong {
        font-weight: var(--font-weight-bold);
    }
</style>