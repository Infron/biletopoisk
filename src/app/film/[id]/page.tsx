import React from "react";

export default function Film({ params }: { params: { id: number }}) {
    return (
        <div>
            {`Film = ${params.id}`}
        </div>
    );
}