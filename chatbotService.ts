// Simplified chatbot service - remove broken import

class ChatbotService {
  private apiKey: string;

  constructor() {
    this.apiKey = import.meta.env.VITE_CHATBOT_API_KEY || '';
  }

  async sendMessage(message: string) {
    try {
      // Simulate chatbot response for now
      return this.getMockResponse(message);
    } catch (error) {
      console.error('Error sending message to chatbot:', error);
      throw error;
    }
  }

  async getResponse(message: string) {
    try {
      return this.getMockResponse(message);
    } catch (error) {
      console.error('Error getting response from chatbot:', error);
      throw error;
    }
  }

  private getMockResponse(message: string): string {
    // Simple mock responses
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('flight')) {
      return 'I can help you find flights. Please provide your departure and arrival cities.';
    } else if (lowerMessage.includes('book')) {
      return 'To book a ticket, please visit our booking page.';
    } else if (lowerMessage.includes('cancel')) {
      return 'To cancel a booking, please provide your booking reference number.';
    } else {
      return 'Thank you for your message. How can I assist you with your travel plans today?';
    }
  }
}

export default new ChatbotService();
