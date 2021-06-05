import React from 'react';
import {WorkItem,WorkTitle,JobTitle} from './Styles';
import {SectionTitle,Paragraph} from '../../Styles';
import Layout from '../../Component/Layout';

const Work=({user})=> {
    return (
        <Layout user={user}>
            <div>
                <SectionTitle>Work</SectionTitle>
                <ul>
                    {user.work.map((work,i)=>(
                        <WorkItem key={i}>
                            <WorkTitle>{work.position}</WorkTitle>
                            <div>
                                <JobTitle>{work.company}</JobTitle>
                                <span> &sdot; </span>
                                <span>{work.location}</span>
                                <span> &sdot; </span>
                                <span>
                                    {work.start.year} to {work.end.year}
                                </span>
                            </div>
                            <Paragraph>{work.summary}</Paragraph>
                        </WorkItem>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Work;
