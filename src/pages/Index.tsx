import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Icon from '@/components/ui/icon'

const literaryTerms = [
  {
    id: 1,
    term: "Метафора",
    definition: "Троп, основанный на употреблении слова в переносном значении на основе сходства в каком-либо отношении двух предметов или явлений.",
    etymology: "От греч. metaphorá — перенос",
    genre: "Тропы",
    category: "Стилистика",
    examples: ["«Горит восток зарёю новой» (А.С. Пушкин)"],
    letter: "М"
  },
  {
    id: 2,
    term: "Сонет",
    definition: "Твёрдая стихотворная форма, состоящая из 14 строк, написанных пятистопным или шестистопным ямбом.",
    etymology: "От ит. sonetto — звучать",
    genre: "Лирика",
    category: "Стихосложение",
    examples: ["Сонеты Шекспира", "«Поэту» М.Ю. Лермонтова"],
    letter: "С"
  },
  {
    id: 3,
    term: "Эпифора",
    definition: "Стилистическая фигура, заключающаяся в повторении одних и тех же элементов в конце каждого параллельного ряда.",
    etymology: "От греч. epiphorá — добавление",
    genre: "Фигуры речи",
    category: "Стилистика",
    examples: ["«Мне бы хотелось знать, отчего я титулярный советник? Почему именно титулярный советник?» (Н.В. Гоголь)"],
    letter: "Э"
  },
  {
    id: 4,
    term: "Роман",
    definition: "Большое эпическое произведение, в котором повествование сосредоточено на судьбе отдельной личности в процессе её становления и развития.",
    etymology: "От фр. roman",
    genre: "Эпос",
    category: "Жанры",
    examples: ["«Война и мир» Л.Н. Толстого", "«Преступление и наказание» Ф.М. Достоевского"],
    letter: "Р"
  },
  {
    id: 5,
    term: "Аллегория",
    definition: "Выражение отвлечённых понятий в конкретных художественных образах.",
    etymology: "От греч. allegoria — иносказание",
    genre: "Тропы",
    category: "Стилистика",
    examples: ["Фемида — аллегория правосудия", "Басни И.А. Крылова"],
    letter: "А"
  },
  {
    id: 6,
    term: "Трагедия",
    definition: "Драматический жанр, основанный на развитии событий, несущих гибельные последствия для протагониста.",
    etymology: "От греч. tragodia — козлиная песнь",
    genre: "Драма",
    category: "Жанры",
    examples: ["«Гамлет» В. Шекспира", "«Борис Годунов» А.С. Пушкина"],
    letter: "Т"
  }
]

const genres = ["Все жанры", "Тропы", "Лирика", "Фигуры речи", "Эпос", "Драма"]
const letters = ["Все", "А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Э", "Ю", "Я"]

export default function Index() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("Все жанры")
  const [selectedLetter, setSelectedLetter] = useState("Все")
  const [selectedTerm, setSelectedTerm] = useState<typeof literaryTerms[0] | null>(null)

  const filteredTerms = literaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGenre = selectedGenre === "Все жанры" || term.genre === selectedGenre
    const matchesLetter = selectedLetter === "Все" || term.letter === selectedLetter
    
    return matchesSearch && matchesGenre && matchesLetter
  })

  return (
    <div className="min-h-screen bg-academic-paper font-georgia">
      {/* Header */}
      <header className="bg-academic-dark text-academic-light shadow-2xl">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-2 text-academic-light tracking-wide">
              Литературный Словарь
            </h1>
            <p className="text-lg text-academic-light/90 font-georgia">
              Академическое издание терминов и понятий
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-white/90 shadow-xl border-academic-gray/20 mb-6">
              <CardHeader className="pb-4">
                <CardTitle className="font-serif text-academic-dark flex items-center gap-2">
                  <Icon name="Search" size={20} />
                  Поиск
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Input
                    placeholder="Поиск терминов..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-white border-academic-gray/30 focus:border-academic-dark"
                  />
                </div>
                
                <div>
                  <h3 className="font-serif font-semibold mb-3 text-academic-dark">Жанры и направления</h3>
                  <div className="space-y-2">
                    {genres.map(genre => (
                      <Button
                        key={genre}
                        variant={selectedGenre === genre ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedGenre(genre)}
                        className="w-full justify-start text-sm font-georgia"
                      >
                        {genre}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif font-semibold mb-3 text-academic-dark">Алфавитный указатель</h3>
                  <div className="grid grid-cols-6 gap-1">
                    {letters.map(letter => (
                      <Button
                        key={letter}
                        variant={selectedLetter === letter ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedLetter(letter)}
                        className="p-1 text-xs font-serif"
                      >
                        {letter}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="dictionary" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-white shadow-md">
                <TabsTrigger value="dictionary" className="font-georgia">Словарь терминов</TabsTrigger>
                <TabsTrigger value="alphabetical" className="font-georgia">Алфавитный указатель</TabsTrigger>
              </TabsList>

              <TabsContent value="dictionary" className="space-y-4">
                {selectedTerm ? (
                  <Card className="bg-white shadow-xl border-academic-gray/20">
                    <CardHeader className="border-b border-academic-gray/20 bg-academic-light/50">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl font-serif text-academic-dark">
                          {selectedTerm.term}
                        </CardTitle>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedTerm(null)}
                          className="flex items-center gap-2"
                        >
                          <Icon name="ArrowLeft" size={16} />
                          Назад
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge variant="secondary" className="font-georgia">
                          {selectedTerm.genre}
                        </Badge>
                        <Badge variant="outline" className="font-georgia">
                          {selectedTerm.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                      <div>
                        <h3 className="font-serif font-semibold text-academic-dark mb-2 flex items-center gap-2">
                          <Icon name="BookOpen" size={18} />
                          Определение
                        </h3>
                        <p className="text-academic-gray font-georgia leading-relaxed text-lg">
                          {selectedTerm.definition}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-serif font-semibold text-academic-dark mb-2 flex items-center gap-2">
                          <Icon name="Languages" size={18} />
                          Этимология
                        </h3>
                        <p className="text-academic-gray font-georgia italic">
                          {selectedTerm.etymology}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-serif font-semibold text-academic-dark mb-2 flex items-center gap-2">
                          <Icon name="Quote" size={18} />
                          Примеры
                        </h3>
                        <ul className="space-y-2">
                          {selectedTerm.examples.map((example, index) => (
                            <li key={index} className="text-academic-gray font-georgia italic border-l-4 border-academic-gray/30 pl-4">
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid gap-4">
                    <div className="mb-4">
                      <h2 className="text-2xl font-serif text-academic-dark mb-2">
                        Найдено терминов: {filteredTerms.length}
                      </h2>
                      {searchTerm && (
                        <p className="text-academic-gray font-georgia">
                          Результаты поиска для: "{searchTerm}"
                        </p>
                      )}
                    </div>
                    
                    {filteredTerms.map(term => (
                      <Card 
                        key={term.id} 
                        className="bg-white shadow-lg border-academic-gray/20 hover:shadow-xl transition-shadow cursor-pointer transform hover:scale-[1.01] transition-transform"
                        onClick={() => setSelectedTerm(term)}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-xl font-serif text-academic-dark">
                              {term.term}
                            </CardTitle>
                            <div className="flex gap-2">
                              <Badge variant="secondary" className="font-georgia text-xs">
                                {term.genre}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-academic-gray font-georgia leading-relaxed line-clamp-3">
                            {term.definition}
                          </p>
                          <div className="flex items-center justify-between mt-4 pt-4 border-t border-academic-gray/20">
                            <span className="text-sm text-academic-gray/70 font-georgia italic">
                              {term.etymology}
                            </span>
                            <Icon name="ChevronRight" size={16} className="text-academic-gray/70" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="alphabetical" className="space-y-4">
                <Card className="bg-white shadow-xl border-academic-gray/20">
                  <CardHeader className="bg-academic-light/50 border-b border-academic-gray/20">
                    <CardTitle className="font-serif text-academic-dark flex items-center gap-2">
                      <Icon name="List" size={20} />
                      Алфавитный указатель
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {letters.filter(letter => letter !== "Все").map(letter => {
                        const termsForLetter = literaryTerms.filter(term => term.letter === letter)
                        if (termsForLetter.length === 0) return null
                        
                        return (
                          <div key={letter} className="space-y-2">
                            <h3 className="font-serif font-bold text-lg text-academic-dark border-b border-academic-gray/30 pb-1">
                              {letter}
                            </h3>
                            <ul className="space-y-1">
                              {termsForLetter.map(term => (
                                <li key={term.id}>
                                  <button
                                    onClick={() => setSelectedTerm(term)}
                                    className="text-academic-gray hover:text-academic-dark font-georgia text-sm hover:underline text-left"
                                  >
                                    {term.term}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-academic-dark text-academic-light mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
              <Icon name="Book" size={24} className="text-academic-light" />
              <span className="text-lg font-serif">Академическое издание</span>
            </div>
            <p className="text-academic-light/80 font-georgia text-sm">
              © 2024 Литературный словарь. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}