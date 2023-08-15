import { ScrollView } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements';
import { useState } from 'react';
import Mission from './Mission';
import { PARTNERS } from '../shared/partners';

const AboutScreen = () => {
    const [partners] = useState(PARTNERS);

    return (
        <ScrollView>
            <Mission />
            <Card>
                <Card.Title>Community Partners</Card.Title>
                <Card.Divider />
                {partners.map((partner) => (
                    <ListItem key={partner.id}>
                        <Avatar rounded source={partner.image} />
                        <ListItem.Content>
                            <ListItem.Title>{partner.name}</ListItem.Title>
                            <ListItem.Subtitle>{partner.description}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </Card>
        </ScrollView>
    );
};

export default AboutScreen;