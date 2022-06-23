<script>
import Page from "../lib/components/index/Page.svelte";
import Spacer from "../lib/components/index/Spacer/Spacer.svelte";

</script>

<Page headline="Want to become a sponsor?" center>

    <h2>Expose your Company to a Group of Highly Motivated Technology Enthusiasts</h2>

    <Spacer size="xs"/>

    <div class="sponsoring-grid">
        <div>
            <h3>You will get ...</h3>
            <ul>
                <li>
                    Get up to <strong>5 preregistered participant spots</strong> for
                    your representatives
                </li>
                <li>
                    We place your <strong>logo</strong> and <strong>link</strong> on
                    the JSCraftCamp website
                </li>
                <li>
                    Your <strong>exhibitor</strong> will be visible for the whole
                    time during the event
                </li>
                <li>
                    You can bring a <strong>stand-up display</strong> to be
                    permanently visible.
                </li>
                <li>
                    You can make your job ads visible for all attendees for the
                    whole time during the conference.
                </li>
                <li>
                    Your <strong>company name</strong> will be mentioned several
                    times during the conference
                </li>
                <li>
                    It's an OpenSpace &mdash; contribute the{" "}
                    <strong>talks that are important to you</strong> to the
                    community
                </li>
                <li>
                    Sponsors will be announced via the official JSCC{" "}
                    <strong>Twitter</strong> account
                </li>
            </ul>
        </div>
        <div>
            <h3>Why Sponsor?</h3>
            <p>
                The JSCraftCamp is an Open Space conference that attracts diverse
                people from the JavaScript community who really care about their
                craft. The crowd is self selected by investing time for their own
                application (pull request). Besides developers, you will find all
                kind of people with different job roles that really care about
                technology and improvement. You will get the chance to present
                your brand to these 80 to 120 highly skilled individuals and show
                them how much you care! We'll all thank you for that!
            </p>
        </div>
    </div>

    <Spacer size="s" />

    <p>
        Show how much you care about improving the state of Crafting Software
        and Clean Code in the JS-Community!
    </p>

    <p>
        We believe in people and our guests - so we ask nothing more of
        everybody than to be respectful and friendly with one another.
    </p>

    <Spacer size="xs" />

    <h3>
        What to Sponsor?
    </h3>
    <p>
        All expense will serve the attendees of the JSCraftCamp, all the
        expenses serve for food, drinks, chairs, and all alike things that are
        needed for spending a couple of days together thinking and hacking for
        the modern world.
    </p>

    <Spacer size="xs" />

    <a href="https://github.com/orgs/jscraftcamp/projects/3">
        Find all sponsoring items on GitHub:
        <br />
        https://github.com/orgs/jscraftcamp/projects/3
    </a>

</Page>

<style>
    h2 {
        max-width: 50ch;
        text-align: center;
        line-height: 110%;
    }

    h3 {
        margin: 1rem 0;
    }

    p {
        max-width: 100ch;
        text-align: center;
    }

    a {
        text-align: center;
    }

    .sponsoring-grid {
        max-width: 660px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .sponsoring-grid > div {
        flex-basis: 300px;
        flex-grow: 1;
        padding: 0 1rem;
    }

    .sponsoring-grid p {
        text-align: justify;
    }

    ul {
        display: flex;
        flex-direction: column;
        list-style: revert;
    }

</style>