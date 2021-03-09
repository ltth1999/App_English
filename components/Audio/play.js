import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function ProgressBar() {
  const progress = useTrackPlayerProgress();

  return (
    <View style={styles.progress}>
      <View style={{flex: progress.position, backgroundColor: 'red'}} />
      <View
        style={{
          flex: progress.duration - progress.position,
          backgroundColor: 'grey',
        }}
      />
    </View>
  );
}

function ControlButton({title, onPress}) {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      <Text style={styles.controlButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

ControlButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default function Player(props) {
  const playbackState = usePlaybackState();
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtwork, setTrackArtwork] = useState('');
  const [trackArtist, setTrackArtist] = useState('');
  useTrackPlayerEvents(['playback-track-changed'], async (event) => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artist, artwork} = track || {};
      setTrackArtwork(artwork);
      setTrackTitle(title);
      setTrackArtist(artist);
      
    }
  });

  const {style, onNext, onPrevious, onTogglePlayback} = props;

  var middleButtonText = 'Play';

  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    middleButtonText = 'Pause';
  }

  return (
    <View style={[styles.card, style]}>
       <Image style={styles.cover} source={{ uri: trackArtwork }} />
      {/* <Image style={styles.cover} source={require('../../src/image/coverArt.jpg')} /> */}
      <ProgressBar />
     
      <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text>
      {/* <View style={styles.controls}>
        <ControlButton title={'<<'} onPress={onPrevious} />
        <ControlButton title={middleButtonText} onPress={onTogglePlayback} />
        <ControlButton title={'>>'} onPress={onNext} />
      </View> */}
      <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16,
          }}>
          <TouchableOpacity onPress={onPrevious}>
            <Icon name="backward" size={32} color="#93A8B3"></Icon>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.playButtonContainer}
            onPress={onTogglePlayback}>
              <Icon
                name="play"
                size={30}
                color="#3D425C"
                style={[styles.playButton, {marginLeft: 8}]}></Icon>
            {/* ) : (
              <Icon
                name="pause"
                size={30}
                color="#3D425C"
                style={[styles.playButton, {marginLeft: 8}]}></Icon>
            )} */}
          </TouchableOpacity>
          <TouchableOpacity onPress={onNext}>
            <Icon name="forward" size={32} color="#93A8B3"></Icon>
          </TouchableOpacity>
        </View>
    </View>
  );
}

Player.propTypes = {
  style: ViewPropTypes.style,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onTogglePlayback: PropTypes.func.isRequired,
};

Player.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  card: {
    width: '80%',
    elevation: 1,
    borderRadius: 4,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    alignItems: 'center',
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 1},
  },
  cover: {
    width: 185,
    height: 185,
    borderRadius: 90,
  },
  progress: {
    height: 1,
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
  },
  title: {
    marginTop: 10,
  },
  artist: {
    fontWeight: 'bold',
  },
  controls: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  controlButtonContainer: {
    flex: 1,
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },
  playButtonContainer: {
    backgroundColor: '#FFF',
    borderColor: 'rgba(93, 63, 106, 0.2)',
    borderWidth: 16,
    width: 128,
    height: 128,
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 32,
    shadowColor: '#5D3F6A',
    shadowRadius: 30,
    shadowOpacity: 0.5,
  },
});
