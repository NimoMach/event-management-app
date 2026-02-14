import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

function EventDetails() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [id]);

  const loadData = async () => {
    try {
      setLoading(true);

      const eventRes = await API.get(`/api/events/${id}`);
      setEvent(eventRes.data);

      try {
        const userRes = await API.get("/api/events/user");

        const isRegistered = userRes.data.some(
          (e) => e._id === id
        );

        setRegistered(isRegistered);
      } catch (err) {
        setRegistered(false);
      }

    } catch (error) {
      console.error("Error loading event:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    try {
      const res = await API.post(`/api/events/${id}/register`);
      alert(res.data.message);
      await loadData(); 
    } catch (error) {
      alert(error.response?.data?.message || "Error registering");
    }
  };

  const handleCancel = async () => {
    try {
      const res = await API.delete(`/api/events/${id}/cancel`);
      alert(res.data.message);
      await loadData(); 
    } catch (error) {
      alert(error.response?.data?.message || "Error cancelling");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!event) return <p>Event not found</p>;

  return (
    <div>
      <h2>{event.name}</h2>

      <p><strong>Organizer:</strong> {event.organizer}</p>
      <p><strong>Category:</strong> {event.category}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p>
        <strong>Date:</strong>{" "}
        {new Date(event.date).toLocaleDateString()}
      </p>
      <p><strong>Available Seats:</strong> {event.availableSeats}</p>

      {!registered && event.availableSeats > 0 && (
        <button onClick={handleRegister}>
          Register
        </button>
      )}

      {registered && (
        <button onClick={handleCancel}>
          Cancel Registration
        </button>
      )}

      {!registered && event.availableSeats === 0 && (
        <p style={{ color: "red" }}>Event Full</p>
      )}
    </div>
  );
}

export default EventDetails;
