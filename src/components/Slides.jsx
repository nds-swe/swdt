import React from 'react'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const Slides = ({ htmlFile, title }) => {
  const { siteConfig } = useDocusaurusContext();
  const presentationSrc = useBaseUrl('/p/' + htmlFile + '.html');
  return (
    <>
      <iframe src={presentationSrc} height="600px" width="100%" title={title}></iframe>
      <a href={presentationSrc} target="_blank" rel="noopener noreferrer">See in full screen</a>
      &nbsp;(<a href={presentationSrc + '?print-pdf'} target="_blank" rel="noopener noreferrer">Print</a> <small><Link to="https://revealjs.com/pdf-export/">How to</Link></small>)
      (<Link to={siteConfig.customFields.editUrl + presentationSrc}>Edit</Link>)
    </>
  )
};