// pages/blog/post.tsx
import RootLayout from "../../app/layout";

const Dante = () => {
  return (
    <RootLayout>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-center mb-4">Blog Post Title</h1>
        <div className="text-center mb-8">
          <span className="inline-block text-sm text-gray-500">
            By Rumi Allbert
          </span>
          <span className="mx-1">•</span>
          <span className="inline-block text-sm text-gray-500">Dante</span>
        </div>
        <div className="prose mx-auto">
          <p>
            This is the content of the blog post. You can replace this with any
            content you want. You can also add more paragraphs, headings, lists,
            images, and more.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            diam ultricies, scelerisque arcu quis, mattis purus. Morbi tellus
            nibh, sollicitudin a gravida quis, commodo eget eros.
          </p>
        </div>
      </div>
    </RootLayout>
  );
};

export default Dante;
