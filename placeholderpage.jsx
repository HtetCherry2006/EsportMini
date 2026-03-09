const PlaceholderPage = ({ title }) => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="text-center space-y-2">
      <h1 className="font-display text-xl text-primary">{title}</h1>
      <p className="text-sm text-muted-foreground">Coming soon</p>
    </div>
  </div>
);

export default PlaceholderPage;