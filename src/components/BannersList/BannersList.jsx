import { setContent } from "../../helpers/hocs/setContent"
import { withSkeleton } from "../../helpers/hocs/withSkeleton"
import { NewsBanner } from "../NewsBanner/NewsBanner"
import styles from './styles.module.css'

export const BannersList = ({banners}) => {
    return (
      <ul className={styles.banners}>
        {banners?.map(banner => {
          return (
            <NewsBanner key={banner.id} item={banner}/>
          )
        })}
      </ul>
    )
}

export const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 10, "row")
export const BannersListSetContent = setContent(BannersList, "banner", 10, "row")