
export default function Category({category:{id, title, image}}) {
    return (
        <a href="#" className="flex flex-col group gap-y-2 transition hover:bg-purple-50 items-center text-center p-4">
            <img src={image} alt = {title} className="w-12 h-12 rounded border border-gray-200" />
            <span className="text-sm font-semibold text-gray group-hover:text-brand-color">{title}</span>
        </a>
    )
}
