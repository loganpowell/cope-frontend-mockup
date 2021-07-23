import { API } from "cope-client-utils"

const type = API.NodeType
export const getNodesByType = /* GraphQL */ `
    query getNodesByType($type: NodeType!, $status:NodeStatus!) {
        nodesByStatusType(status:$status, typeCreatedAt:{beginsWith:{type:$type}}){
            items{
                id
                type
                assets{
                    items{
                        type
                        name
                        content
                        index
                    }
                }
            }
        }
    }        
`