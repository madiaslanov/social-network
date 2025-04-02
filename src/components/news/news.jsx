import React, {useEffect} from "react";
import st from './news.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getTrendingTopicsNews} from "../../redux/thunk";
import NewsCategories from "./categories/categories";
import GeneralNews from "./generalNews";

const News = () => {
    return (
        <div>
            <NewsCategories/>
            <GeneralNews/>
        </div>
    );

}

export default News;
