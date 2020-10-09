import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { SectionHeader } from "./Slices"
import ArticleCard from "./ArticleCard"
import Carousel from "./Carousel"

const RecentPosts = () => {
  const {
    allPrismicArticle: { nodes: articles },
  } = useStaticQuery(graphql`
    query RecentArticles {
      allPrismicArticle(
        sort: { fields: last_publication_date, order: DESC }
        limit: 10
      ) {
        nodes {
          uid
          data {
            title
            cover {
              url
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <SectionHeader className="px-8 border-t">
        <div className="flex w-full justify-between">
          <h2>MOST RECENT STORIES</h2>
          <div className="">prev next</div>
        </div>
      </SectionHeader>
      <div className="flex px-8 -mx-8">
        <Carousel options={{ perView: 4 }}>
          {articles.map(article => (
            <Link to={`/${article.uid}`}>
              <ArticleCard className="py-8 px-8" article={article} />
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default RecentPosts
