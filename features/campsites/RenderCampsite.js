import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderCampsite = ({ campsite }) => {
    if (campsite) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={campsite.image}> {/*shows the image for the campsite card*/}
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}>
                            {campsite.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{campsite.description}</Text>
            </Card>
        );
    }
    return <View />; {/*When using conditional rendering, it's important to always return something from the component, 
                      otherwise it will cause an error.*/}
};



export default RenderCampsite;