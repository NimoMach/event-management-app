import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    const res = await API.get(`/api/events/${id}`);
    setEvent(res.data);
  };

  const handleRegister = async () => {
    try {
      const res = await API.post(`/api/events/${id}/register`);
      alert(res.data.message);
      fetchEvent();
      setRegistered(true);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  const handleCancel = async () => {
    try {
      const res = await API.delete(`/api/events/${id}/cancel`);
      alert(res.data.message);
      fetchEvent();
      setRegistered(false);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  if (!event) return <p>Loading...</p>;

  return (
    <div>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>{event.location}</p>
      <p>{new Date(event.date).toLocaleDateString()}</p>
      <p>Available Seats: {event.availableSeats}</p>

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
    </div>
  );
}

export default EventDetails;
