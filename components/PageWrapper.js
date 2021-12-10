export const PageWrapper = ({ children }) => {
  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="max-w-3xl mx-auto">{children}</div>
    </div>
  );
};
