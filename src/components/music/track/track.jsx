import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useParams} from "react-router-dom";
import {getTrack} from "../../../redux/thunk";
import Preloader from "../../common/preloader/preloader";
import styles from "./track.module.css";

const Track = () => {
    const dispatch = useDispatch();
    const trackData = useSelector((state) => state.musicPages.trackId);
    const {id} = useParams();

    useEffect(() => {
        dispatch(getTrack(id));
    }, [dispatch, id]);

    if (!trackData) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={styles.titleHolder}>
                <img src={trackData.album.images[1].url} alt=""/>
                <div className={styles.description}>
                    <h1>{trackData.name}</h1>
                    <h3>popularity-rank: {trackData.popularity}</h3>
                    <NavLink to={trackData.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                        Spotify link
                    </NavLink>
                </div>
            </div>
            <div className={styles.albumHolder}>
                <p></p>
            </div>
        </div>
    );
};

export default Track;

