import "./view-multiple.styles.scss"

import ViewMultipleEntry from "../view-multiple-entry/view-multiple-entry.component"

const ViewMultiple = ({data}) =>{

    return (
        <div  className="view-multiple-container">
            {data.map(
                entry =>
                <ViewMultipleEntry key={entry._id} entry={entry} />
            )}
        </div>
    )
}

export default ViewMultiple;