/** @jsx jsx */
import { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css, jsx } from '@emotion/react'

import Layout from '../components/layout'

const TilPage: FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allGithubData {
        nodes {
          data {
            repository {
              id
              issues {
                edges {
                  node {
                    createdAt(formatString: "MM-DD-yyyy")
                    id
                    labels {
                      nodes {
                        name
                      }
                    }
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const issues = data.allGithubData.nodes[0].data.repository.issues.edges
    .map((edge) => edge.node)
    .map((issue) => ({
      ...issue,
      labels: issue.labels.nodes.map((node) => node.name),
    }))

  return (
    <Layout>
      <h1>til[wip]</h1>
      <ul
        css={css`
          max-width: 100%;
          padding-inline-start: 0;
          list-style-type: none;
          text-align: center;
          display: grid;
          row-gap: 2em;
        `}
      >
        {issues.map((issue) => (
          <li
            key={issue.id}
            css={css`
              display: grid;
              grid-template-columns: 3fr 1fr;
              grid-template-rows: 1fr;

              h2 {
                font-size: 1.5rem;
                padding: 0;
                word-break: break-all;
                text-align: left;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
              }
            `}
          >
            <h2>
              {issue.title}
              <ul
                css={css`
                  list-style-type: none;
                  font-size: 1rem;
                  display: flex;
                  align-items: center;
                  padding-inline-start: 0;

                  li:not(:last-of-type) {
                    padding-right: 1em;
                  }
                `}
              >
                {issue.labels.map((label) => (
                  <li key={label}>#{label}</li>
                ))}
              </ul>
            </h2>
            <span
              css={css`
                font-size: 1rem;
                display: inline-flex;
                justify-content: flex-end;
                align-items: center;
              `}
            >
              {issue.createdAt}
            </span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default TilPage