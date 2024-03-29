import React, { useState, useEffect } from 'react';
import Video from '../Video';
import Playlist from './Playlist';
import { ThemeProvider } from 'styled-components';
import StyledSamPlayer from '../styles/StyledSamPlayer';

const theme = {
    bgcolor: "#353535",
    bgcolorItem: "#414141",
    bgcolorItemActive: "#405c63",
    bgcolorPlayed: "#526d4e",
    border: "none",
    borderPlayed: "none",
    color: "#fff",
}

const themeLight = {
    bgcolor: "#fff",
    bgcolorItem: "#fff",
    bgcolorItemActive: "##80a7b1",
    bgcolorPlayed: "#7d9979",
    border: "1px solid #353535",
    borderPlayed: "none",
    color: "#353535",
}

const SamPlayer = ({match, history, location}) => {

    const videos = JSON.parse(document.querySelector('[name="videos"]').value);

    const [state, setState] = useState({
        videos: videos.playlist,
        activeVideo: videos.playlist[0],
        nightMode: true,
        playlistId: videos.playlistId,
        autoplay: false
    });

    useEffect(() => {
        const videoId = match.params.activeVideo;
        if(videoId !== undefined) {
            const newActiveVideo = state.videos.findIndex(
                video => video.id === videoId,
            );
            setState(prev => ({
                ...prev,
                activeVideo: prev.videos[newActiveVideo],
                autoplay: location.autoplay
            }));
        } else {
            history.push({
                pathname: `/${state.activeVideo.id}`,
                autoplay: false,
            })
        }
    }, [])

    const nightModeCallback = () => {
        setState(prevState=>({
            ...prevState,
            nightMode: !prevState.nightMode
        }));
    }


    return (
        <ThemeProvider theme={state.nightMode ? theme : themeLight}>
            {state.videos !== null ? (
                <StyledSamPlayer>
                    <Video
                        active={state.activeVideo}
                        autoplay={state.autoplay}
                    />
                    <Playlist
                        videos={state.videos}
                        active={state.activeVideo}
                        nightModeCallback={nightModeCallback}
                        nightMode={state.nightMode}
                    />
                </StyledSamPlayer>
            ) : null}
        </ThemeProvider>
    );
}

export default SamPlayer;