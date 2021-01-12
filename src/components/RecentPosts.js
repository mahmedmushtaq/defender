import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { isMobile } from "react-device-detect"
import { Swiper, SwiperSlide } from "swiper/react"
import { SectionHeader } from "./Slices"
import Link from "./Link"
import ArticleCard from "./ArticleCard"

const RecentPosts = () => {
  const [swiper, setSwiper] = useState(null)
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
    <div className="overflow-hidden">
      <SectionHeader className="px-8 border-t">
        <div className="flex w-full justify-between">
          <h2>MOST RECENT STORIES</h2>
          <div className="">
            <div className="flex">
              <button
                className=""
                onClick={() => swiper?.slideTo(swiper.activeIndex - 1)}
              >
                Prev
              </button>
              <button
                className="ml-2"
                onClick={() => swiper?.slideTo(swiper.activeIndex + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </SectionHeader>
      <div className="p-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={isMobile ? 2 : 4}
          // centeredSlides={true}
          // loop={true}
          onSwiper={s => setSwiper(s)}
        >
          {articles.map((article, i) => (
            <SwiperSlide key={i}>
              <Link className="block" to={`/${article.uid}`}>
                <ArticleCard className="" article={article} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default RecentPosts
