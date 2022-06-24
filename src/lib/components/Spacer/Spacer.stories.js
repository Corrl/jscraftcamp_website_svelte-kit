import Spacer from './Spacer.svelte'
import StoriesWrapper from "./Stories-wrapper.svelte";

export default {
    title: 'components/Spacer',
    component: Spacer,
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
        },
    },
};

const Template = (args) => ({
    Component: StoriesWrapper,
    props: args,
});

export const sizeXS = Template.bind({});
sizeXS.args = {
    size: 'xs',
};

export const sizeS = Template.bind({});
sizeS.args = {
    size: 's',
};

export const sizeM = Template.bind({});
sizeM.args = {
    size: 'm',
};

export const sizeL = Template.bind({});
sizeL.args = {
    size: 'l',
};

export const sizeXL = Template.bind({});
sizeXL.args = {
    size: 'xl',
};

export const sizeXXL = Template.bind({});
sizeXXL.args = {
    size: 'xxl',
};