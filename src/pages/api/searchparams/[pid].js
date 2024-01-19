

export default async (req, res) => {
    const {pid, filter} = req.query
    res.end(`${pid}, ${filter}`)
}