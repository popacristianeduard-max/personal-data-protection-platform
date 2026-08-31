export default function NumberedList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <div className="space-y-8">
      {items.map((item, i) => (
        <div key={item.title} className="flex gap-5">
          <div className="shrink-0 w-9 h-9 rounded-full border border-gold-500/50 text-gold-600 flex items-center justify-center font-bold text-sm tabular">
            {String(i + 1).padStart(2, "0")}
          </div>
          <div>
            <h3 className="font-semibold text-navy-950">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
