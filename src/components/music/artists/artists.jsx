import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "./artists.module.css";
import {getArtists} from "../../../redux/thunk";
import defaultArtists from "./img/defaultArtist.jpg";
import {NavLink} from "react-router-dom";
import Preloader from "../../common/preloader/preloader";

const Artists = () => {
    const dispatch = useDispatch();
    const artistsData = useSelector((state) => state.musicPages.artistsData);
    // const pageSize = useSelector((state) => state.musicPages.pageSize);
    // const currentPage = useSelector((state) => state.musicPages.currentPage);
    // const artistsTotalCount = useSelector((state) => state.musicPages.artistsTotalCount);
    //
    // const totalPages = Math.ceil(artistsTotalCount / pageSize); // Количество страниц

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        dispatch(getArtists()).finally(() => setLoading(false));
    }, [dispatch]);

    if (loading) {
        return <Preloader />;
    }

    return (
        <div>
            <div className={styles.listHolder}>
                {artistsData.map((artist) => (
                    <div className={styles.leftSide} key={artist.id}>
                        <div className={styles.imagesHolder}>
                            <NavLink to={`/music/artist/${artist.id}`}>
                                <img
                                    className={styles.images}
                                    src={artist.images && artist.images[1] ? artist.images[1].url : defaultArtists}
                                    alt={artist.name || "Artist"}
                                />
                            </NavLink>
                        </div>
                        <NavLink to={`/music/artist/${artist.id}`}>
                            <span>{artist.name}</span>
                        </NavLink>
                    </div>
                ))}
            </div>

            {/*<PaginationArtist currentPage={currentPage} totalPages={totalPages} pageSize={pageSize}/>*/}
        </div>
    );
};
export default Artists;
