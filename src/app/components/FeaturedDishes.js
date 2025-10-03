// Main App Component
import DishCard from './DishCard';
import StatsCard from './StatsCard';

const FeaturedDishes = () => {
  const featuredDishes = [
    {
      id: 1,
      name: "Grilled Atlantic Salmon",
      price: 28,
      image: "https://images.unsplash.com/photo-1684568519320-8c6b14f7e65f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzU4Njc1NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Seafood",
      cookTime: "25 min",
      rating: 4.8
    },
    {
      id: 2,
      name: "Truffle Pasta Primavera",
      price: 24,
      image: "https://images.unsplash.com/photo-1682377651820-0234f2abec85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcGFzdGF8ZW58MXx8fHwxNzU4NjkxOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Pasta",
      cookTime: "20 min",
      rating: 4.9
    },
    {
      id: 3,
      name: "Wagyu Beef Tenderloin",
      price: 45,
      image: "https://images.unsplash.com/photo-1705755402973-009b7877a0f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc3RlYWslMjBkaW5uZXJ8ZW58MXx8fHwxNzU4NTk0MTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Meat",
      cookTime: "30 min",
      rating: 5
    }
  ];

 
  const stats = [
    {
      value: "4.8★",
      label: "Customer Rating",
      color: "text-green-500",
    },
    {
      value: "25+",
      label: "Years Experience",
    },
    {
      value: "10k+",
      label: "Happy Customers",
      color: "text-[#6e2f5c]",
    },
    {
      value: "15 min",
      label: "Avg. Wait Time",
      color: "text-green-500",
    }
  ];

  return (
    <div className="min-h-screen py-0 px-4 sm:px-6 lg:px-7">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-left mb-5">
          <h2 className="text-2xl text-gray-800 mb-4">
            Today&apos;s Featured Dishes
          </h2>
        </div>

        {/* Featured Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} showCategory={true} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard 
                key={index}
                value={stat.value}
                label={stat.label}
                color={stat.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};  

export default FeaturedDishes;
