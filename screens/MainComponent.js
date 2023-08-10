import { useState } from 'react';
import { View, Platform } from 'react-native';
import Constants from 'expo-constants';
import { CAMPSITES } from '../shared/campsites';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
    const [campsites, setCampsites] = useState(CAMPSITES);
    const [selectedCampsiteId, setSelectedCampsiteId] = useState();

    return (
        <View
            style={{
                flex: 1,
                paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
            }}>
            <DirectoryScreen
                campsites={campsites}
                onPress={(campsiteId) => setSelectedCampsiteId(campsiteId)}
            />
            <CampsiteInfoScreen
                campsite={
                    campsites.filter(
                        (campsite) => campsite.id === selectedCampsiteId
                    )[0]
                }
            />
        </View>
    );
};

export default Main;