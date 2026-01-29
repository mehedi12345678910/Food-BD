export const feedback=[
    {
        id:1,
        message:"wow ata valo chilo"
    },
    {
        id:2,
        message:"amar shate ata kora thik hoi ni"
    },
]

export async function GET(request) {
    return Response.json({
        status:200,
        message:"Yahoo . API created"
    })
}


