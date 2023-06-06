/* eslint-disable prettier/prettier */
import { Meta, StoryObj } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import { withI18n } from "storybook-addon-i18n";
import i18n from "../../i18n/config";
import Footer from "../Common/Footer";

export default {
    title: "Components/Footer",
    component: Footer,
    decorators: [
        withI18n,
        (Story: React.ComponentType) => (
            <I18nextProvider i18n={i18n}>
                <Story />
            </I18nextProvider>
        ),
    ],
} as Meta;

export const Default: StoryObj = {};