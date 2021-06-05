import React from 'react';
import Layout from '../../Component/Layout';
import {SectionTitle,Paragraph} from '../../Styles';
import {EducationItem,Institution,Degree} from './Styles';

const Education=({ user })=>{
    return (
        <Layout user={user}>
            <div>
                <SectionTitle>Education</SectionTitle>
                <ul>
                    {user.education.map((education,i) =>(
                        <EducationItem key ={i}>
                            <Institution>{education.position}</Institution>
                            <div>
                                <Degree>
                                    {education.studyType}
                                <div>{education.area}</div>
                                </Degree>{' '}
                                
                                <span> &sdot; </span>
                                <span>
                                    {education.start.year} to {education.end.year}
                                </span>
                                
                            </div>
                            <Paragraph>{education.description.replace('\n\n', '\n')}</Paragraph>
                        </EducationItem>
                    ))}
                </ul>

            </div>
        </Layout>
    );
};

export default Education;
