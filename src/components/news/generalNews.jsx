import React, { useEffect } from "react";
import st from './news.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getTrendingTopicsNews } from "../../redux/thunk";
import NewsCategories from "./categories/categories";

const GeneralNews = () => {
    const dispatch = useDispatch();
    const newsData = useSelector((state) => state.newsPages.trendNews);

    useEffect(() => {
        dispatch(getTrendingTopicsNews());
    }, [dispatch]);

    if (!newsData || newsData.length === 0) {
        return <div className={st.loading}>Loading...</div>;
    }

    return (
        <div>
            <div  className={st.main}>
                {newsData.map((news, index) => (
                    <div key={index} className={st.newsList}>
                        {news.image ? (
                            <img src={news.image} alt="news thumbnail" />
                        ) : (
                            <img src="https://media.istockphoto.com/id/1369150014/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D1%8B%D0%B5-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8-%D1%81-%D1%84%D0%BE%D0%BD%D0%BE%D0%BC-%D0%BA%D0%B0%D1%80%D1%82%D1%8B-%D0%BC%D0%B8%D1%80%D0%B0-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.jpg?s=612x612&w=0&k=20&c=lCQb6W4sZRot20QaXJanvDeJ3Pa3yJRqYcgKJ25VdgE=" alt="news thumbnail" />
                        )}
                        <div className={st.newsDescription}>
                            <p>{news.title}</p>
                            <div>
                                <span>{news.published_at ? new Date(news.published_at).toLocaleDateString() : 'Date is not available'}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default GeneralNews;
