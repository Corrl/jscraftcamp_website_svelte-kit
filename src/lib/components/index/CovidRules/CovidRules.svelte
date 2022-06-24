<script>
    import Rule from "./Rule.svelte";
</script>

<h2>
    Covid-Rules
</h2>

<div id="covid-rules">

    <div>
        <p>
            The global pandemic is still ongoing. We want to make sure that even
            vulnerable groups can attend our event under the current
            circumstances. To ensure the safety of all participants, we want
            everyone to follow a couple of rules.
        </p>
        <p>
            If you have any questions or problems regarding these rules, don't
            hesitate to contact one of us from the team.
        </p>
    </div>

    <ul>
            <Rule icon="⚠️">
                Have a test certificate ready - will be checked at the entrance.
                Ideally issued in last 24 hours. Due to the bank holiday on Thursday, up to max. 48h will be accepted.
            </Rule>
            <Rule icon="👥">
                Max. 80 people at the location!
            </Rule>
            <Rule icon="😷">
                Wear an FFP2 mask whenever possible!
            </Rule>
            <Rule icon="💦">
                Wash your hands thoroughly!
            </Rule>
            <Rule icon="🍫">
                When you grab a snack, don't lick it and put it back!
            </Rule>
    </ul>
</div>


<style>
    #covid-rules {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 4rem 2rem;
    }

    #covid-rules > * {
        flex-basis: 28rem;
    }


    h2 {
        margin-bottom: 2rem;
    }

    p {
        text-align: center;
    }

    p + p {
        margin-top: 1rem;
    }

    ul {
        flex-direction: column;
    }

</style>