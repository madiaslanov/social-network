import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getAlbum } from "../../../../redux/thunk";
import styles from "./album.module.css";
import Preloader from "../../../common/preloader/preloader";

const Album = () => {
    const albumData = useSelector(state => state.musicPages.albumId);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getAlbum(id)).finally(() => setLoading(false));
    }, [dispatch, id]);

    const formatDuration = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        return `${minutes}:${(seconds < 10 ? '0' : '') + seconds}`;
    };

    const handleClick = () => {
        window.open(albumData.external_urls.spotify);
    };

    if (loading) {
        return <Preloader />;
    }

    return (
        <div>
            <div className={styles.titleHolder}>
                <img src={albumData.images[1].url} alt={albumData.name} />
                <div className={styles.description}>
                    <h1>{albumData.name}-{albumData.artists[0].name}</h1>
                    <h3>Popularity Rank: {albumData.popularity}</h3>
                    <p>Release: {albumData.release_date}</p>
                    <p>Total Tracks: {albumData.total_tracks}</p>
                    <NavLink to={albumData.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                        Spotify link
                    </NavLink>
                    <p className={styles.copyrights}>{albumData.copyrights[0].text}</p>
                </div>
            </div>

            <div className={styles.tracksList}>
                {albumData.tracks.items && Array.isArray(albumData.tracks.items) && albumData.tracks.items.map((track, index) => (
                    <div className={styles.trackItems} key={track.id}>
                        <div className={styles.leftSideList}>
                            <div className={styles.listElement}>
                                <p>{index + 1}</p>
                            </div>
                            <div className={styles.listElement}>
                                <button onClick={handleClick} className={styles.playBtn}>
                                </button>
                            </div>
                            <div className={styles.listElement}>
                                <NavLink to={`/music/artist/track/${track.id}`}>
                                    {track.name}
                                </NavLink>
                            </div>
                        </div>
                        <div className={styles.rightSideList}>
                            <div className={styles.listElement}>
                                <p>{formatDuration(track.duration_ms)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Album;
