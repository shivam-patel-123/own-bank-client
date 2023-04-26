import React, { useState } from "react";
import { Tab, TabsArea } from "./Tabs";

const Tabs = ({ children, active }) => {
    const [tabsName, setTabsName] = useState([]);
    const [tabsContent, setTabsContent] = useState([]);

    useState(() => {
        const tabs = [];
        const content = {};

        React.Children.forEach(children, (tabPane) => {
            const { name, children } = tabPane.props;
            tabs.push(name);
            content[name] = children;
        });
        setTabsName(tabs);
        setTabsContent(content);
    }, [children]);

    return (
        <>
            <TabsArea>
                {tabsName.map((tabPane) => (
                    <Tab
                        key={tabPane}
                        active={active === tabPane ? true : false}
                    >
                        {tabPane}
                    </Tab>
                ))}
            </TabsArea>
            {Object.keys(tabsContent).map((tabName) =>
                tabName === active ? (
                    <div key={tabName}>{tabsContent[tabName]}</div>
                ) : null
            )}
        </>
    );
};

export default Tabs;
