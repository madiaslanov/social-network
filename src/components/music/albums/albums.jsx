import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAlbums} from "../../../redux/thunk";
import styles from "../artists/artists.module.css";
import {NavLink} from "react-router-dom";
import defaultArtists from "../artists/img/defaultArtist.jpg";
import Preloader from "../../common/preloader/preloader";


const Albums = () => {
    const dispatch = useDispatch();
    const albumsData = useSelector((state) => state.musicPages.albums.items);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getAlbums()).finally(() => setLoading(false));
    },[dispatch])

    if (loading) {
        return <Preloader />;
    }

    return <div>
        <div className={styles.listHolder}>
            {albumsData && albumsData.length > 0 ? (
                albumsData.map((album) => (
                    <div className={styles.leftSide} key={album.id}>
                        <div className={styles.imagesHolder}>
                            <NavLink to={`/music/album/${album.id}`}>
                                <img
                                    className={styles.images}
                                    src={album.images && album.images[1] ? album.images[1].url : defaultArtists}
                                    alt={album.name || "Album"}
                                />
                            </NavLink>
                        </div>
                        <NavLink to={`/music/album/${album.id}`}>
                            <span>{album.name}</span>
                        </NavLink>
                    </div>
                ))
            ) : (
                <p>No albums found</p>
            )}
        </div>
    </div>
}

export default Albums;
