import "./view-multiple-entry.styles.scss"
import {withRouter} from "react-router-dom"


const ViewMultipleEntry = ({entry, history}) =>(
    <div onClick={()=>{history.replace(`/${entry._id}`)}} className={"view-multiple-entry"}>
        <div className="view-multiple-entry-thumbnail"
          style={{backgroundImage: `url(${entry.thumbnail.url})`}}
        />
        <div className="view-multiple-entry-data">
            <div className={"view-multiple-entry-data-title"}>
                {entry.name}
            </div>
            <div className={"view-multiple-entry-data-seller"}>
                Category: {entry.category}
            </div>
            <div className={"view-multiple-entry-data-seller"}>
                Seller: placeholder_text_for_now
            </div>
            <div className={"view-multiple-entry-data-seller"}>
                Condition: {entry.condition}
            </div>
            <div className={"view-multiple-entry-data-price"}>
                {`${entry.price} ${entry.currency}`}
            </div>
        </div>
    </div>
)

export default withRouter(ViewMultipleEntry);