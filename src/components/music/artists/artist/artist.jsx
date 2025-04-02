import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./artist.module.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getArtist, getArtistTopTracks } from "../../../../redux/thunk";
import ArtistNotFound from "../artistNotFound";
import Preloader from "../../../common/preloader/preloader";

const Artist = () => {
    const dispatch = useDispatch();
    const artistData = useSelector((state) => state.musicPages.artistData);
    const { id } = useParams();
    const tracksData = useSelector((state) => state.musicPages.tracks);

    useEffect(() => {
        dispatch(getArtist(id));
        dispatch(getArtistTopTracks(id));
    }, [dispatch, id]);

    const handleClick = () => {
        window.open(artistData.external_urls.spotify);
    }

    if (!artistData || !tracksData) {
        return <Preloader />
    }

    if (!artistData.images || artistData.images.length === 0) {
        return <ArtistNotFound />;
    }

    const formatDuration = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        return `${minutes}:${(seconds < 10 ? '0' : '') + seconds}`;
    };

    return (
        <div>
            <div className={styles.titleHolder}>
                <img src={artistData.images[1].url} alt={artistData.name} />

                <div className={styles.description}>
                    <h1>{artistData.name}</h1>
                    <h3>{artistData.type}</h3>
                    <p>Subscribers: {artistData.followers.total}</p>
                    <NavLink to={artistData.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                        Spotify link
                    </NavLink>
                </div>
            </div>

            <div className={styles.tracksList}>
                {tracksData && Array.isArray(tracksData) && tracksData.map((track, index) => (
                    <div key={track.id} className={styles.trackItems}>
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
                            <div className={styles.listElement}>
                                <p>{track.album.release_date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Artist;
