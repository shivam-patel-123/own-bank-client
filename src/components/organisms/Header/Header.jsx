import { useState } from "react";
import { Switch } from "../..";
import { HeaderTop, HeaderWrapper, SearchBar, SearchResultWrapper } from "./Header.js";

const Header = () => {
    const [isSearchResultsOpen, setIsSearchResultOpen] = useState(false);

    const showSearchResult = () => {
        setIsSearchResultOpen(true);
    };

    const hideSearchResult = () => {
        setIsSearchResultOpen(false);
    };

    return (
        <HeaderWrapper>
            <HeaderTop>
                <SearchBar placeholder="Search for account name ..." onFocus={showSearchResult} onBlur={hideSearchResult} />
                <Switch />
            </HeaderTop>
            <SearchResultWrapper active={isSearchResultsOpen}></SearchResultWrapper>
        </HeaderWrapper>
    );
};

export default Header;
