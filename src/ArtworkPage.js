import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Mock data - replace with real fetch in production
const artworks = {
  "1": {
    id: "1",
    src: "/placeholder_1.jpg",
    alt: "Abstract painting",
    title: "Spiral of Color",
    description: "Oils on canvas, 2023",
    price: "2000",
    artist: "Jane Doe",
    dimensions: '24" x 36"',
    medium: "Oil on Canvas",
    year: "2023",
    currentBid: "1800",
    minBidIncrement: "50",
  },
  "2": {
    id: "2",
    src: "/placeholder_2.jpg",
    alt: "Abstract painting",
    title: "Europhia",
    description: "Oils on canvas, 2023",
    price: "2000",
    artist: "Jane Doe",
    dimensions: '24" x 36"',
    medium: "Oil on Canvas",
    year: "2023",
    currentBid: "1800",
    minBidIncrement: "50",
  },
  "3": {
    id: "3",
    src: "/placeholder_3.jpg",
    alt: "Abstract painting",
    title: "Garlic",
    description: "Oils on canvas, 2023",
    price: "2000",
    artist: "Brooke Behar",
    dimensions: '24" x 36"',
    medium: "Oil on Canvas",
    year: "2023",
    currentBid: "1800",
    minBidIncrement: "50",
  },
  "4": {
    id: "4",
    src: "/placeholder_4.jpg",
    alt: "Abstract painting",
    title: "Europhia 2",
    description: "Oils on canvas, 2023",
    price: "2000",
    artist: "Brooke Behar",
    dimensions: '24" x 36"',
    medium: "Oil on Canvas",
    year: "2023",
    currentBid: "1800",
    minBidIncrement: "50",
  },
  "5": {
    id: "5",
    src: "/placeholder_5.jpg",
    alt: "Abstract painting",
    title: "Monroe",
    description: "Oils on canvas, 2023",
    price: "2000",
    artist: "Brooke Behar",
    dimensions: '24" x 36"',
    medium: "Oil on Canvas",
    year: "2023",
    currentBid: "1800",
    minBidIncrement: "50",
  },
};

export default function ArtworkPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const artwork = artworks[id];
  const [bidAmount, setBidAmount] = useState('');
  const [currentBid, setCurrentBid] = useState('');

  if (!artwork) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artwork not found</h1>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-800 text-white rounded"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const minBid = parseInt(artwork.currentBid, 10) + parseInt(artwork.minBidIncrement, 10);
  const displayCurrentBid = currentBid || artwork.currentBid;

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const bid = parseInt(bidAmount, 10);
    if (bid < minBid) {
      return alert(`Minimum bid is $${minBid}`);
    }
    setCurrentBid(bidAmount);
    setBidAmount('');
    alert(`Bid of $${bid} submitted successfully!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={artwork.src}
            alt={artwork.alt}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Details + Bidding */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{artwork.title}</h1>
            <p className="text-lg text-gray-600 mb-4">{artwork.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-gray-200 rounded text-sm">{artwork.medium}</span>
              <span className="px-2 py-1 bg-gray-200 rounded text-sm">{artwork.dimensions}</span>
              <span className="px-2 py-1 bg-gray-200 rounded text-sm">{artwork.year}</span>
            </div>
            <p><strong>Artist:</strong> {artwork.artist}</p>
          </div>

          <div className="border rounded p-4">
            <div className="flex justify-between mb-4">
              <span>Current Bid</span>
              <span className="text-2xl font-bold text-green-600">${displayCurrentBid}</span>
            </div>
            <form onSubmit={handleBidSubmit} className="space-y-4">
              <div>
                <label htmlFor="bid">Your Bid (min: ${minBid})</label>
                <input
                  id="bid"
                  type="number"
                  min={minBid}
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  placeholder={`Enter bid (min $${minBid})`}
                  className="mt-1 w-full border px-2 py-1 rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded"
              >
                Place Bid
              </button>
            </form>
            <div className="mt-4 text-sm text-gray-600">
              <p>Starting price: ${artwork.price}</p>
              <p>Increment: ${artwork.minBidIncrement}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed bottom-6 left-6 bg-white border px-4 py-2 rounded shadow"
      >
        <ArrowLeft className="inline-block w-4 h-4 mr-1" /> Back
      </button>
    </div>
  );
}
