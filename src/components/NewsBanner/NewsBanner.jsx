import { formatTimeAgo } from "../../helpers/formatTimeAgo"
import { setContent } from "../../helpers/hocs/setContent"
import { withSkeleton } from "../../helpers/hocs/withSkeleton"
import { Image } from "../Image/Image"
import styles from './styles.module.css'

export const NewsBanner = ({item}) => {
    return (
      <div className={styles.banner}>
          <Image image={item?.image}/>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.extra}> {formatTimeAgo(item.published)} by {item.author}</p>
      </div>
    )
}

export const NewsBannerWithSkeleton = withSkeleton(NewsBanner, "banner", 1)
export const NewsBannerSetContent = setContent(NewsBanner, "banner", 1)