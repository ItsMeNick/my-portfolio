import React from 'react'
import Layout from '../../Component/Layout';
import { SectionTitle,Paragraph,Pill} from '../../Styles'
import {ProfileLink} from './Styles';



const Profile = ({user}) => {
    return (
        <Layout user ={user}>
            <div>
                <SectionTitle>About Nikhil</SectionTitle>
                <Paragraph>{user.basics.summary}</Paragraph>
            </div>
            <div>
                <SectionTitle>Skills</SectionTitle>
                <div>
                    {user.skills.map(skill =>(
                        <Pill key={skill.name}>{skill.name}</Pill>
                    ))}
                </div>
            </div>
            <div>
                <SectionTitle>Profiles</SectionTitle>
                <ul>
                    {user.basics.profiles.map((profile,i) =>(
                        <ProfileLink key={profile.network}>
                            {i !== 0 && ' | '}
                            <a href ={profile.url} target="_blank" rel="noreferrer noopener">
                                {profile.network}
                            </a>
                        </ProfileLink>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Profile;
