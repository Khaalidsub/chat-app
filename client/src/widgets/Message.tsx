import React from "react"


function Message(props: MessageProp): JSX.Element {
    return (
        <div className="w-full flex justify-between items-center p-2">
            <div className="flex-shrink-0 m-2">
                <img className="h-12 w-12 rounded-full" src={props.image} alt="user" />
            </div>
            <div className={`pt-3 pb-4 pl-3 pr-4  mx-auto bg-${props.color} rounded-xl shadow-md`}>


                <div className="text-md font-medium text-black">{props.user}</div>
                <p className="text-gray-500">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet, elit id ullamcorper varius, ipsum diam efficitur magna, pulvinar maximus leo ligula et tortor. Quisque non arcu vitae libero placerat luctus eu vitae nulla. Pellentesque laoreet tortor nec odio egestas, eget euismod sapien sagittis. In sollicitudin sed felis quis consectetur. Sed sollicitudin quis nisl eu porttitor. Ut faucibus lobortis lacus et efficitur. Morbi nec metus ut mi porttitor elementum vel quis velit. Morbi aliquet vulputate leo, sed suscipit dolor hendrerit et. Quisque quis dolor odio."</p>

            </div>
        </div>
    )
}

interface MessageProp {
    message: string,
    user: string,
    image: string
    color: string
}


export default Message

